EPAM values: act with integrity, value the individual, strive for excellence, focus on the customer, act as a team
Technical leaders - people that act proactively, has wide vision on technologies, 
Definition - Pros/cons - Tools - Use cases - Practice use

Javascript core and frameworks
Event loop
Macrotasks: script, event callback (onclick, oninput etc)
To plan macrotask: setTimeout/setInterval(func)
Microtasks: Promise-related methods (.then/.catch/.finally), async/await, Mutation Observer
To plan microtask: queueMicrotask(func)
Render tasks: requestAnimationFrame, Style recalculate, Layout, Paint
To call something before render: requestAnimationFrame
1. Run macrotask from callstack
2. Run all microtasks from microtasks queue one by one (used Browser API)
3. Render
4. Run macrotask from callback queue if exists
5. Run all microtasks from microtasks queue one by one if exist (used Browser API)
6. Render
7. Run planned with setTimeout/setInterval tasks if call stack is empty (used WebAPI or Browser API and message queue)
Could block event loop: alert, sync HTTP-request


***Performance***
1. Measure
2. Convince the stakeholders to improve user experience
3. Correct poor metrics
Performance Budget - some limits for overall used metrics the app must follow
Main Metrics: First contentful paint (FCP), Largest contentful paint (LCP), First input delay (FID),
    Time to Interactive (TTI), Total blocking time (TBT), Cumulative layout shift (CLS)
Core Web Vitals: LCP 2.5s-4s, FID 100ms-300ms, CLS 0.1-0.25
Performance model RAIL (Response, animation, idle, load) - 100ms - 16ms - 50ms - 1s

Tools:
Lighthouse, Chrome, Speed Page, WebPageTest https://webpagetest.org/, web-vitals lib, Cloudflare, New Relic, Sentry,
 SpeedCurve, Benchmarks (console methods or performance.now() or jsbench or MeasureThat)
Profiling (Heap Snapshot, Memory profile, Execution profile)

Web Workers (in parallel thread, has messages model with main thread, don't have access to DOM)
WebAssembly
Hidden Objects

***Performance Optimization***
make a hypothesis - measure with tools and metrics - make profiling - fulfil or reject hypothesis - create certain task

React performance/optimization:
Lazy loading, virtualization, reconciliation process (use shouldComponentUpdate and React.memo, PureComponent),
useMemo; don't use nested props
SSR (use .hydrate instead .render), React native, React 360, React fiber

Network optimization: archivation (gzip, Broadley?), cache, ServiceWorker, lazy loading or by-demand loading, 

***Security***
Security - NFR, could be considered as self-recovered and 
Secure SDLC. Security breaches.
Security Risk Assessment.
Severity = Likelihood * Impact

***OWASP Top 10 2021***
1. Broken Access Control

2. Cryptographic Failures

3. Injection (incl. Cross-site scripting XSS)
An application is vulnerable to attack when:
- User-supplied data is not validated, filtered, or sanitized by the application.
- Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter.
- Hostile data is used within object-relational mapping (ORM) search parameters to extract additional, sensitive records.
- Hostile data is directly used or concatenated. The SQL or command contains the structure and malicious data in dynamic
 queries, commands, or stored procedures.

Some of the more common injections are SQL, NoSQL, OS command, Object Relational Mapping (ORM), LDAP,
 and Expression Language (EL) or Object Graph Navigation Library (OGNL) injection. The concept is identical among all
 interpreters. Source code review is the best method of detecting if applications are vulnerable to injections.
 Automated testing of all parameters, headers, URL, cookies, JSON, SOAP, and XML data inputs is strongly encouraged.
 Organizations can include static (SAST), dynamic (DAST), and interactive (IAST) application security testing tools into
 the CI/CD pipeline to identify introduced injection flaws before production deployment.
Prevent: sanitizing, escaping, parametrized parameters

Header Content Security Policy HCSP

4. Insecure Design

5. Security Misconfiguration

6. Vulnerable and Outdated Components

7. Identification and Authentication Failures
*CSRF
Cookie

8. Software and Data Integrity Failures

9. Security Logging and Monitoring Failures

10. Server-Side Request Forgery (SSRF)

XML External Entity Attack (XXE)

Tools:
Static: npm packages analyze (npm sum), Sonar Qube, Sonar lint, "nodesecurity/eslint-plugin-security",
    Checkmarx, Veracode, Fortify, PT Application Inspector
Dynamic: OWASP Zed Attack Proxy (ZAP), Acunetix Nessus, Arachni, w3af, Skipfish
Composition Analysis: Black Duck, Snyk
For Node.js: LTS version, use Object model relations ORM, Helnet, security configs keeping

Same origin policy: protocol/host/port; simple requests (head ); tag script in html; 
CORS

Authentication
Cookies


Security in React
Against XSS: don't use running tags <object> , <script>, <link> and <embed>, use {} for text, sanitizing,
 URL parsing and conducting Whitelist/blacklist validation, WAF (Web Application Firewall)
Against SQL injections: filter all types of user inputs with strict whitelists
Against broken authentication: multi-factor authentication, each time create a new session ID
Against Zip Slip: Set up proper file management
Never serialize sensitive data

Always use the principle of least privilege when allowing a connection to any database!
Secure your React APIs

HTTPS
+ Security due TLS Decryption
- Performance, do not use in internal services

***SDLC***
1. Planning and Requirements analysis - Budget, Terms
2. Requirements Defining - Requirements Specification SRS, Quality Attributes, Risks, Test Plan, Product Acceptance Criteria
3. Design of Architecture - Technologies and Tools, Processes, Structures, Dependencies; Design Document Specification DDS
4. Building / Development
5. Testing - Quality control
6. Deployment - Envs Setting, Run
Maintenance


***Methodologies***
Waterfall (fixed scope, budget, timelines, no feedback, expensive bugs)
RUP (Rational Unified Process)
Scrum - ceremonies, planning, iterations, communications, delivery, sprint goal
   Roles in Scrum: Product Owner, Dev Team, Scrum Master
SAFe
Kanban - limit WIP, tend to increase implementation time, no sprints, no estimations, use of Little's Law theorem,
    suitable for support
SCRUMban

***Choose methodology criteria***
Must be adaptive!
- Deadlines
- Budget
- Team composition - seniority/maturity, competence, tech specialists on the customer side
- Customers wishes
- Development stage


***Estimation***
Top-down (agile) - allocate budget between tasks
Bottom-up (waterfall) - Count budget based on tasks, too precise
Проект разбивается на пакеты (work breakdown structure), пакеты разбиваются на activity, которые и эстимируются
Analogous Estimation - based on previous analogues, fast but not very accurate
Parametric Estimation - like analogous but accounts with changed requirements, hard to choose correct coefficient
3-points estimation - sum of most-likely, optimistic, pessimistic / 3; weights could be applied;
    reduces risks, more precise, time-consumed
Project Evaluation and Review Technique (PERT): E = (a + 4m + b) / 6, standard deviation SD = (b − a) / 6

Tools: Simple Estimate, Web Development Project Estimator
Problems: estimation inflation (triangular estimation)
Burnup chart is more appropriate for Release level

***Estimation techniques:***
Planning Pocker
Bucket system
Affinity grouping
T-shirt size estimation: + быстрая оценка -
Time-based estimation

Разбивка сторей
Добавление девелопера

Инструменты трекинга
BurnUp (Scope Creep), BurnDown
RAG/RYG Indicators
Milestones
Gantt chart

Accountability

***Starting project from scratch:***
- (Current state of project, current dev team)
- Business goal (PoC, MVP, integrations necessity)
- Team composition; RACI Matrix - Responsible. Accountable. Consulted. Informed. 
- DoR, DoD (их составляющие)
- User stories syntax (EARS or Gherkin - suitable for Cucumber testing)
   see User story та Acceptance Criteria https://dou.ua/lenta/articles/clear-user-stories/
   see User stories https://www.atlassian.com/agile/project-management/user-stories
   see User story writing assistant https://userstory.top/
- NFRs, their measures: Security, Performance, Availability etc
- Code convention, standards, design
- Tools / mandatory or appropriate (build tools, linters, UI Kit, CSS approach, FE and BE frameworks, use SSR,
    libraries, Database type etc)
- Code review rules
- Estimation approaches and techniques
- Task manager (+integration with VCS)
- Branching strategy
- Deployment strategy (+integration with VCS, messagers), Feature toggling
- Environments strategy
- Testing strategy (types, Regression etc), automating QA
- Bugfixing process
- CI/CD:
CI - Gherkin format; Code review; Build, Linter/Prettier, Unit tests (test coverage); audit (npm/yarn);
    Static Code Analysis (Sonar or other - incl. duplications, violations, security, excessive complexity), SAST/DAST
CD (Delivery/Deployment) - e2e tests, integration, regression, load, contract tests; measure performance,
    collect logs, metrics; semantic release (поднятие версии в package.json), release notes; integration with external tools
    (messengers, Jira)
- Code quality gates (Sonar Qube)
- Breaking changes and Backward compatibility: Deprecation messages, long-term support, автоматизация обновлений
- Disaster recovery, fault tolerance
- Documenting


***Deployment strategy***
https://thenewstack.io/deployment-strategies/
PROs/CONs: ???ring releases, Release cadence, Time to Market, Semantic release, Eliminating after-hours deployments
Recreate: Version A is terminated then version B is rolled out - easy, renew whole state, but with downtime and risky,
    no partial rollbacks (use for non-critical apps or to a lower environment, during off-hours, or with a service that
    is not in use)
Ramped (rolling-update or incremental): Version B is slowly rolled out and replacing version A - easy to set up and
    rollback, but time-consuming, supporting multiple versions is hard to avoid compatibility issues,
    no control over traffic or it must be implemented
Blue/Green: Version B is released alongside version A, then the traffic is switched to version B - low risk, Instant
    rollout/rollback, avoid versioning issue, but expensive as it requires double the resources and testing efforts
Canary: Version B is released to a subset of users, then proceed to a full rollout (used when the tests are lacking or
    not reliable or if there is little confidence about the stability of the new release; useful for error rate and
     performance monitoring but requires efforts to implement properly, have to set up clear performance metrics)
A/B testing: Version B is released to a subset of users under specific condition (Several versions run in parallel,
    Full control over the traffic distribution, like experimental, but Requires intelligent load balancer, or feature
    flags, Hard to troubleshoot errors for a given session, distributed tracing becomes mandatory)
Shadow: Version B receives real-world traffic alongside version A and doesn’t impact the response (testing of the
    application with production traffic, No impact on the user, No rollout until the stability and performance meet the
    requirements, but Expensive as it requires double the resources, Not a true user test and can be misleading,
    Complex to setup, Requires mocking service for certain cases)
The Multi-Service deployment

***Branching strategy*** (branching overhead, merge effort), 
    monorepository (+dependencies management,atomic commits,refactoring; -scalabitilty,just one version,access to whole repo)
Short-lived / Long-lived branches
Centralized / Distributed VCS
Git flow: master - develop (main for branching) - release (from features) and hotfix (from master) branches - feature branches
Github flow: master (main for branching, always ready to deploy) - feature branches (merge or rebase into master); suitable for CD
Gitlab flow: prod - pre-prod - master (main for branching) - feature branches; focused on tested code
Trunk-based (TBD): trunk/master (main for branching, always ready to deploy) - short-lived feature branches -
    release branches from master, feature flags, continuous and fast code review; suitable for CI
    
Orion-documentation-js - github-based with some specificity; Big Bang integration; forking for some dependent repos
Consumer-engagement-hi-console - forked repo, github-based



Frameworks to use: React/Preact, Angular, Vue, Svelte
Angular: enterprise
SSR
Use Technology, radar, showcase, presale portals!

Libs to use:
- suitability
- licence
- Github metrics (downloads, stars, issues, forks, dependencies, authors)
- learning curve, entry threshold
- backward compatibility, migration to new versions

Факторы выбора
Знания (наличие, порог входа, саппорт технологий)
Лицензирование
Интеграция с существующими технологиями (VCS)

FR (functional requirements - should be free of design details)
***NFR (how a system must behave) and software quality attributes:***
Functionality
Availability (without planned downtime)
Performance (responsiveness to user interactions)
Testability
Security (unauthorized access, data protection, malware and other attacks, )
Usability (use of Accelerated Mobile Pages, displayed language, FAQ/help and tooltips, colors)
Reliability
Scalability
Maintainability
Accessability (colors, aria-attributes etc)
Capability
Efficiency
Integrity (data backups)
Portability and compatibility

Performance improvements:
Use rel=preload, prefetch, preconnect, dns-prefetch, prerender

Requirements docs:
Software/system requirement specification (SRS)
Use case
User Story (must fit INVEST quality model - Independent. Negotiable. Valuable. Estimable. Small. Testable)
Work Breakdown Structure (WBS) - collection of all project activities
Project Critical Path - longest path with no floats, accounting dependencies, resources limitations etc;
    Forward Pass and Backward Pass; keep an eye on none-critical tasks also!

***Code quality***
1. Functional (what code does and tests of these actions)
2. Structural (how the code looks - code review, static code analysis)
    - Readability: clear code
    - Maintainability/modifyability/extensability: easy to maintain and edit
    - Following to coding standards - SOLID, DRY
    
+ Benefits of quality code
Saves time (incl. time-to-market) and money
Reduce the number of defects
Decrease time of onboarding to project

- Risks of poor code
Increase time and money for changes
Could lead to future defects
Could lead to incorrect implementations

Code standards:
- Style guides
- Coding principles (incl. exception handling, size of methods, number of parameters, design principles - SOLID, patterns, KISS)
- Code conventions on a project

Terms: clarity, readability, consistency, complexity
Static code analyzers (SonarQube, IntelliJ, VS, Fortify, etc)
Code quality metrics: cyclomatic complexity, coupling, class hierarchy, code duplication, method cohesion

***Testing pyramid*** - framework suitable for agile teams, to prevent bugs, from up to bottom:
0) Manual Tests
1) UI / End-to-End / Acceptance Tests / Exploratory Testing - effort, longer feedback, higher cost to fix
2) Integration / API / External Web Integration / Component Tests
3) Unit tests - isolated (don't have dependencies on env, external data, other unit tests, don't produce side effects,
    use mocks, stubs, spies), low cyclomatic complexity, structured, fast (<75ms), often executed, cheap, cover edge cases;
    AAA, KISS, FIRST; readability, maintainability, included into CI etc

Traditional pyramid - to find bugs, mostly manual testing

Tools:
1) Selenium, Cypress
2) 
3) Jest

Regression tests

Testing strategy. Test Plan
Testing High Score (стоимость написания, стоимость поддержки)
Testing Trophy

Test Design Techniques:
Boundary Value Analysis
Equivalents Partitioning
State transition diagram
Use Case testing
Codepipes Testing Metrics CTM: 
    - PDWT (Percent of Developers who Write Tests)
    - PBCNT (Percent of Bugs that Create New tests)
    - PTVB (Percent of Tests that Verify Behavior and not implementation)
    - PTD (Percent of Tests that are Deterministic to total tests)
    
Признаки качественных тестов
FIRST (Fast. Independent. Repeatable. Self-validating / not flaky. Timely)
Additional attributes: Maintainable. Isolated. Properly targeted.
Code coverage - provides common feedback but not give insights about code quality
Pattern AAA (Arrange - Act - Assert). There is a recommendation to begin from Act step
KISS (Keep It Short and Simple) Design principle - avoid unnecessary complexity in test case
Мутационное тестирование
Tests as documentation
TDD, BDD - using to some utilities writing
BDD (Given - When - Then)

Запуск тестов, pre-commit, pre-push, CI/CD

Testing methods: white box (structural testing), grey box, black box; smoke testing

Code review
+ Benefits
fewer defects, knowledge sharing, consistent standards, compliance
- Risks
low structured code, low functional code quality, possible rework, possible technical issues

Code review types
- Peer review (internal, external)
- Specialist's review
- Instant review (ex. pair programming)

What are the subjects for reviewing:
1. Functional correctness / Business Logic
2. Structural correctness / Design (edge cases, short and fast, safe, patterns, clean code, dependencies etc)
3. Readability / Complexity (fast understandable code, naming, style, conventions, consistency, TODOs)
4. Test correctness
5. None-functional hidden implication (no security vulnerabilities, weak configuration, missing logs, libs licences,
 not supported features etc)
 
Main code reviewer. Code Review slots and limitations. Code Review checklist.

***Technical debt***
Причины: давление бизнеса, отсутствие процессов, понимания, опыта; сильное зацепление компонентов; отсутствие тестов,
 документации, deferred refactoring (TODOs,  warnings from static code analysators);
 намеренное создание долга посредством пренебрежения дизайн-паттернами (PoC, MVP - Minimum Viable Product).
Indicators:
1. Delivery Indicators: Quality degradation (prod issues, regression issues, known issues); High cost of changes;
 Inability to experiment quickly; High learning curve, bus factor alert.
2. Architecture Indicators: Hard to integrate; Hard to reuse (best practice is low coupling and high cohesion);
Hard to grow (scalability); Hard to support (maintainability, documentation quality).
3. Team (people) indicators: Delays; Estimation difficulties; Demotivation.
!! delivery.epam.com
Risks:
Substantial damage to quality; Scalability and Performance issues; Team issues; Customer dissatisfaction.

Ways to improve:
1. Use Technical Debt Registry, Backlog or Management tool
2. Plan time to resolve: technical sprint, buffer in usual sprints
3. Use Refactoring methods: refactoring with small steps with working code between them, testing before refactoring
4. Discuss status and mitigation strategy with Customer. Notify and motivate Team to improve

***Delegation*** (provide accountability and responsibility, involvement into delegated tasks, increase team capacity)
Process of delegation (giving resources, well described task, look from other point of view)
What to delegate: routine tasks, hard technical tasks (to experts), organizational, delivery (ex.deployment),
documenting, onboarding/mentoring, tasks for knowledge sharing, presentational (make a demo)
What do not delegate: high risks tasks?, urgant and important tasks, people management, finance, private
Steps of delegation: describe context, task and expected outcome (incl. value, quality, accuracy), set deadline, set
    the level of decision-making - share knowledge - provide resources and contacts - take commitment - be connected -
    control milestones (save trust, no micromanagement!) - make documenting/resolution - append opinion - results -
    provide feedback
 
I-D-E-A-L approach
I – Identify right assignments and right person
D – Discuss objectives, expectations, key actions, timelines, challenges
E – Evaluate performance and behavior of the person
A – Advise periodically and provide feedback
L – Look for development areas and opportunity to delegate and develop your team members 

***Motivation***
Motivation is the desire to act in service of a goal. Motivation is one of the driving forces behind human behavior.
Positive / Negative
Inner / Outer
Positive inner (like emotional engagement) is the best motivation. It needs to be stimulated implicitly.
Пирамида потребностей Маслоу
Herzberg's motivation-hygiene theory - Двухфакторная теория мотивации (мотивационные и гигиенические факторы)
Motivators (e.g. challenging work, recognition for one's achievement, responsibility, opportunity to do something
    meaningful, involvement in decision making, sense of importance to an organization) that give positive satisfaction,
    arising from intrinsic conditions of the job itself, such as recognition, achievement, or personal growth
Hygiene factors (e.g. status, job security, salary, fringe benefits, work conditions, good pay, paid insurance, vacations)
    that do not give positive satisfaction or lead to higher motivation, though dissatisfaction results from their absence.
- High Hygiene + High Motivation: The ideal situation where employees are highly motivated and have few complaints.
- High Hygiene + Low Motivation: Employees have few complaints but are not highly motivated. The job is viewed as a paycheck.
- Low Hygiene + High Motivation: Employees are motivated but have a lot of complaints. A situation where the job is exciting and challenging but salaries and work conditions are not up to par.
- Low Hygiene + Low Motivation: This is the worst situation where employees are not motivated and have many complaints.
Motivation techniques / ways:
0. Onboarding and retention events
1. Ask teammate what motivates him on 1-to-1 regular meetings
2. Recognitions (better unexpected that expected)
3. Wellness programs (incl. psychological, stress programs)
4. Learning opportunities: time for self-education, propose some learning challenges, help to grow individually
5. Keep close communication: share project news on a regular basis, involve the team into demo (TIA: risks),
    morning coffee meetings, keep key people engaged, informal events
6. Create positive and optimistic space around, value subjects that inspire people

***Onboarding***
Goals: to make it easy and faster entering in new project
Steps: (onboarding plan - preonboarding - onboarding - postonboarding)
 give introduction and overview - assign responsible persons (contact point) - set newcomer guide - help with envs -
 get accounts/accesses - give simple tasks - feedback from newcomers

***Time management***
Negative: Context changing
Techniques: Timeboxing, Pomodoro, 1-3-5, Pareto 20/80, Eisenhower matrix, Kanban
Attention management

***Risks*** (any unexpected event that could affect project)
Risk events - timeframe - probability - impact - factors
Risk management - process of identifying, categorizing, prioritizing and planning for risks before they become issues
Types: External - Internal - Personal; Negative/Positive
Typical risks, name its consequences
1. Changing requirements and priorities
2. Lack of commitment
3. Lack of communication
4. Poor documentation
5. Lack of team capacity
6. Failure to deliver on time
Actions: identify - analyze - prioritize - assign - respond - monitor

***Conflict management*** 
Признание конфликта - prepare facts - discuss, avoid emotions - understand the reasons - find solution -
 set goals and time to improve - control
Частный случай: конфликт с участием лида
Styles: Accommodation. Avoidance(to win time, emotional resolving). Compromising. Competing. Collaboration.

***To build a team***
Phases by Tackman:
- staffing (depending on project stage, budget, deadlines, seniority and skills level / balancing team, motivated, retention)
- forming (mission, goals, expectations, take commitment; "three common, one unique" activity) - changes in
    composition lead to re-forming phase
- storming (set communications and working approaches)
- norming (achieving synergy)
- performing (high level of productivity; at the end - review and reflect)
Nice to have (on a regular basis): teambuildings, learning courses, pair programming, peer reviewing sessions,
    1-to-1 mentoring, technical talks, good documentation (code conventions, wiki, onboarding steps etc),
    collecting feedback, recognition

Underperformed employee.
Ensure in awareness of expectations of employee - prepare facts - discuss, avoid emotions - understand the reasons (external, motivation, etc)
- find solution - set SMART goals and time to improve - control, appreciate for improvements, give feedback
SMART - Specific. Measurable. Achievable. Relevant. Time-framed.

Model Johari
BOFF

***Customer relationships***
Client satisfaction. Trusted partner. Meetup with action items, set plans and terms.

Kick-off: goals, expectations, terms, roles, communications, risks, influence, involvement

Root Cause Analysis (5Why questions methods.)
Философия Пиши-сокращай. Модель Кано. Принцип Парето 80/20. Think out of the box.
Sandwich.

Early feedbacks. Make transparency, collaborate. Proactively report about possible blockers, performance, risks, KPIs

Negotiations strategies: Chess game.

My experience with:
VCS: SVN. Github. Gitlab.
Branching strategy: 

Browser engines
webkit - Safari
Blink - Chrome, Edge, Opera
Gecko - Mozilla

SPA: +
MPA(ecommerce, catalogues, marketplaces): +SEO, scalability, useful for massive data -low dev speed,full page reload,more security effort
PWA: +

***Design patterns***
Creational pattern:
Singleton - window object, DB connection
Factory method - document.createElement(); DI
Abstract factory
Builder - jQuery $() function
Prototype - initialization of objects with default values; Object.prototype
Adapter
Bridge - rare; useful for drivers; Gestures and Mouse with Input / Output events
Composite - the same jQuery methods for one or collection selectors; tree structure implementation; indicator - working recursively
Decorator - alternative to subclasses; extends functionality
Facade: useful for refactoring; event listener polyfill and others polyfills; low performance 

Decorator - bind method
State

***JS antipatterns***
Language:
Global context polluting
Using eval in almost any non-JSON context
Almost every use of document.write (use the DOM methods like document.createElement)
Change of prototype of Object
Mutating arguments
polling
Use a lot of nested if statements
Magic numbers
Use new Object or new Array instead of literals
Modifying DOM in a loop

Design/Deployment:
(Generally) not providing noscript support.
Not packaging your code into a single resource
Putting inline (i.e. body) scripts near the top of the body (they block loading)
