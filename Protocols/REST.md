Session example https://videoportal.epam.com/video/qYLAVxJX#t=69s

***Implementation REST-service***
Цель REST - разработка масштабируемой распределенной архитектуры
Define resources
Define endpoints, methods
Define NFRs
Versioning (deprecation policy; URI-based; ...)
Logging and monitoring
Error handling
API documentation (Swagger, OpenAPI)
Authentication, authorization

***RESTful:***
1. Client-Server. Система должна быть разделена на клиентов и на серверов.
2. Stateless. Сервер не должен хранить какой-либо информации о клиентах.
 В запросе должна храниться вся необходимая информация для обработки запроса и если необходимо, идентификации клиента.
3. Cache․ Каждый ответ должен быть отмечен, является ли он кэшируемым или нет.
4. Uniform Interface. Универсальный интерфейс между компонентами системы.

Для получения универсального интерфейса вводятся следующие ограничения:
Identification of resources.
В REST ресурсом является все то, чему можно дать имя. Например, пользователь, HTML документ, изображение, регистрированный пользователь, красная майка, голодная собака, текущая погода и т.д. Каждый ресурс в REST должен быть идентифицирован посредством стабильного идентификатора, который не меняется при изменении состояния ресурса. В нашем случае идентификатором в REST является URI.

Manipulation of resources through representations.
Представление в REST используется для выполнения действий над ресурсами. Представление ресурса представляет собой текущее или желаемое состояние ресурса. Например, если ресурсом является пользователь, то представлением может являться XML или HTML описание этого пользователя.

Self-descriptive messages.
Под само-описательностью имеется ввиду, что запрос и ответ должны хранить в себе всю необходимую информацию для их обработки. Не должны быть дополнительные сообщения или кэши для обработки одного запроса.

HATEOAS (hypermedia as the engine of application state).
Данный пункт означает, что гипертекст должен быть использован для навигации по API [9]. Отмечу, что в случае SOA для этого используется service description.

5. Layered System. В REST допускается разделить систему на иерархию слоев но с условием, что каждый компонент может видеть компоненты только непосредственно следующего слоя. Например, если вы вызывайте службу PayPal а он в свою очередь вызывает службу Visa, вы о вызове службы Visa ничего не должны знать.
6. Code-On-Demand. В REST позволяется загрузка и выполнение кода или программы на стороне клиента.

Выбор подхода исходя из потребителей API:
Contract first
Code first

Problems:
url pollution

Richardson maturity model
Для каких целей какой уровень подходит?

GraphQL
Query, mutations, subscriptions
Declarative aggregations

***GraphQL vs RESTful***
1. Teams skills, learning curve
2. Typing
3. FE optimization


Short-polling
Example

Long-polling

Server side events - EventStream; data from servers

Websockets - under 8 connections; limitations with firewalls; chats

TCP/UDP
TCP: web apps, peer-to-peer
UDP: no garantee, no secure; gaming, real time audio/video, real time notifications

HTTP2

WebRTC
