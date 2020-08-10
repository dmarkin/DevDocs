###Canonical Payment Form in 2020,
#####good practices or some painful experience's results of my work under the payment forms

####Autofill card data (autocomplete) from inner browser storage.
The main recommendations about autofilling card data were described by Ido Green [in his article](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill).
For Chrome browser data storage maybe is one of the main features and it works.
For Mozilla this feature could be switched on in the Mozilla Nightly build or in the Mozilla with flag at the Settings.
And more important that finally it has [worked in Mozilla since the version 78](https://support.mozilla.org/uk/kb/credit-card-autofill).
But actually you have to do the next:
a) Type in the address bar about:config and press Enter;
b) Find and change the preference: ```extensions.formautofill.available``` to "on";
c) Close and restart Firefox.
For Safari ...

And anyway for local development you need to pass form trough some proxy to expose it via http/https for using
autocomplete card data. I use [ngrok](https://ngrok.com/) for this goal - it has very simple API.

####Validations
There some kinds of validations rules that we could apply to a form.
Consider main of them:
1) Validations of required fields
2) Validations of the formats
Where and how to represent error messages on the form - it's on your choice, there are a lot of possibilities and you are
free to choose one of them or create you own awesome. The good practice is to have one common block for general errors
and place it under the header of your form.
On my point of view the main workflow with validations is the next: at the start we haven't show any kind of errors and
we can show submit button as disabled (with imitation ```class="disabled"``` but not with ```disabled``` attribute on
it), user could click it in any moment and get the error messages, but if there are no errors on the form - we have to
applied ```class="enabled"``` to submit button.

And two general rules: use ```tabIndex```-es on your inputs to make navigation between them easy and don't forget to
trim corner spaces in the inputs!

Based on these prerequirements ...
Usually we use several fields to provide our user possibility to make the payment. Let's consider them in details and
try to answer the questions that we will face on the way.
Assume that we also use Bootstrap 4 classes to mark up out inputs, English placeholders and aria-attributes etc.
Also the good practice is to use aria-tags to make possible to read the labels with electronic readers for users with
limited possibilities.

1) Payment form
```html
<form id="payment-form"
      class="your-payment-form-class"
      noValidate>
```

Use ```noValidate``` to prevent a native browser's error messages on form that not consistently implemented in various browsers.
For sending form data use also ```method="post" action="your-payment-endpoint"``` (HTML request with Form Data object) or
you could make intercept the call via JS using ```onSubmit``` method and prevent native browser behaviour. 
If you use JS to send data don't forget add ```onSubmit``` (not only append submit button on the page) to link Submit with the form.

2) Card number
```html
<input type="tel"
       id="card-number"
       name="cardnumber"
       class="form-control"
       placeholder="Card number"
       autoComplete="cc-number"
       autoFocus
       pattern="[0-9]*"
       inputMode="numeric"
       required
       maxLength="23"
       aria-label="Card number"
       aria-required="true"/>
```

a) Why do we need ```type="tel"``` and ```pattern="[0-9]*" inputMode="numeric"```?

As for now we can use 2 appropriate choices to fill card number - ```type="tel"``` and ```type="text"```.
But for main mobile browsers only first one triggers digital keyboard and gives the simplified possibility to fill the field.
So, UX is the prior factor - we will choose ```html type="tel"```!
The similar motivation we will use to input the expiration date and CVV. And please - don't use ```type="number"``` in
these cases!

b) ```autoFocus```

Don't forget to provide this useful feature for users just to make start of filling form more easily.

c) ```maxLength```
It's a very good practice to limitate your user inputs by some size. As for now length of card number acquired by all
major players includes from 12 to 19 digits (see [Wiki](https://en.wikipedia.org/wiki/Payment_card_number)).

Also keep in mind that you could want to use some card number formatters a.k.a. input masks that group card number by
4-digits groups. If they insert some symbols between digit's groups we simply need to increase our maxLength to satisfy
this goal.

Also keep in mind that ```size``` attribute has no valued impact to UX and not worth to include it in your payment form.

d) Validation
The main validation for card number is Luhn check algorithm. Several implementations are exist, I usually use the
[next one](https://gist.github.com/ShirtlessKirk/2134376) as fast

3) Card expiration date
For this field we need to decide how to implement inputs: with one input, with 2 selects or 2 inputs (for month and year
accordingly).
For my point of view the preferable choice is one masked input; but lets deeply consider all the cases:

3a)
```html
<input type="tel"
       id="exp-date"
       class="form-control"
       name="exp-date"
       autoComplete="cc-exp"
       pattern="[0-9]*"
       inputMode="numeric"
       maxLength="7"
       required
       placeholder="MM/YY"
       aria-label="Expiration date"
       aria-required="true"/>
```

In this case I suppose that we need to mask this input such a way: "MM/YY". But at the same time I propose to set ```maxLength="7"```.
When it will be useful? Actually some browsers with autofilling card data are using full format, for example 10/2022. So
I want to prevent such case when browser will cut expiration date using ```maxLength="5"``` size limit.

3b)
```html
<select id="exp-month"
        name="ccmonth"
        required
        autoComplete="cc-exp-month"
        aria-label="Expiration month"
        aria-required="true">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
</select>

<select id="exp-year"
        name="ccyear"
        autoComplete="cc-exp-year"
        required
        aria-label="Expiration year"
        aria-required="true">
</select>
```

And why I leave select for year without options? I think it must on your mind how to fill it. For example, I like the variant
when I can dynamically fill it with several actual options, for example - with values from the current year to the (current + 10)-th.  
I do this with small JS snippet (used jQuery):

```javascript
        const NEXT_YEARS_COUNTER = 10;
        const currentYear = (new Date()).getFullYear();
        for (let i = currentYear; i <= currentYear + NEXT_YEARS_COUNTER; i++) {
            $('#exp-year').append(new Option(i.toString().substr(2, 2), i.toString()));
        }
```

But in one unpleasant moment we faced with problem that in WebView-based forms we have inconsistency. The format for
saved at the Storage Data card expiration date was "01/2022", but it wasn't correctly pasted inside the appropriate
select because it has tried to match with value == "1" (not "01"!) and it was very discouraged for user. This case leads
us to align all our expiration date inputs to 3a) choice.

3c)
```html
<input type="tel"
       id="exp-month"
       class="form-control"
       name="ccmonth"
       autoComplete="cc-exp-month"
       pattern="[0-9]*"
       inputMode="numeric"
       maxLength="2"
       required
       placeholder="MM"
       aria-label="Expiration month"
       aria-required="true"/>
<input type="tel"
       id="exp-date"
       class="form-control"
       name="exp-date"
       autoComplete="cc-exp"
       pattern="[0-9]*"
       inputMode="numeric"
       maxLength="4"
       required
       placeholder="MM/YY"
       aria-label="Expiration year"
       aria-required="true"/>
```

In general, it's cozy to place Card expiration date in a row with the next field - CVC/CVV.
 
4) CVV/CVC
```html
<input type="tel"
       id="ccCVV"
       name="cvc"
       class="form-control"
       autoComplete="cc-csc"
       pattern="[0-9]*"
       inputMode="numeric"
       maxLength="3"
       required
       placeholder="CVV"
       aria-label="CVV"
       aria-required="true"/>
```

There is maybe one general question - do we need to mask our CVV with "***" or some other symbols? It seems that we don't
have to do this except the cases when we use public terminals or other none-secured monitors to input CVV. So this
decision is on your choice. If you want to mask - the simplest is to use ```type="password"``` here and for cross-browser
view you can add font called ```text-security-disc``` or in this manner. If you use placeholder also don't forget to set
the next properties in your CSS file:

```css
input[name="cvc"] {
    font-family: "text-security-disc";
}

input[name="cvc"]::placeholder {
    font-family: "your-usual-font-without-security";
}
```

Definitely the CVV may include 4 digits and you could increase ```maxLength``` for this field if you use cards with
4-digits CVV. In general you can switch off autofilling of CVV with ```autoComplete="off"``` attribute, but this pushes
your users to fill CVV all times.

You can choose full ```placeholder="CVV/CVC"``` but keep in mind that usually this field is limited by the width so no
needs to paste redundant text here. 
Also there is an obvious that you can use placeholder to make clear that we expect some digits here, for example ```placeholder="123"```.

5) Cardholder name (name on card)

```html
<input type="text"
       id="cardholder-name"
       name="ccname"
       class="form-control"
       autoComplete="cc-name"
       placeholder="Cardholder name"
       aria-label="Cardholder name"/>
```

In rare cases that I faced with the name of this field is Username but I think it's not correct because if the user has
also the username related to your service this will leads to some kind of misunderstandings which of these names he has
to input here.

6) User email

```html
<input type="email"
       id="cardholder-email"
       name="ccemail"
       class="form-control"
       autoComplete="cc-email"
       placeholder="Cardholder email"
       aria-label="Cardholder email"/>
```

7) Submit button
```html
<button id="submit-button"
        class="btn btn-success btn-lg btn-block"
        type="submit">Pay</button>
```

Here I prefer to make button with ```type="submit"``` than to make it with ```type="button"```.   
In rare cases this button is implemented as
```html
<input id="submit-button"
       class="btn btn-submit"
       type="submit"
       value="Pay"/>
```
but it hasn't sense to do this in such way.

It's a good practice to show sum and currency of payment on the button.
Don't forget to prevent double-clicking on submit button because it could lead to double recording of transactions at the backend.

Your logotip(s), card brands icons and card brand identification on the fly, language selection, various tooltips,
PCI DSS, secure services and other icons, agreement checkboxes and additional UI elements are optional components for
your checkout payment page so you almost free to place them here or not.

Also I highly recommend to read next useful articles:
[Best Payment Form UX Practices to Boost Your Conversion](https://securionpay.com/blog/best-payment-form-ux-practices/)