---
title: How It DOESN'T Work
---

As people compare DevSec with other technologies, we commonly explain what the technology isn't...

## It's Not Signature-Based

Signatures look for common patterns in technology. The difficulty of signatures is that there are so many and it's impossible to be large and accurate.
Contrast tech does not look for basic signatures like unsafe characters.<br/>
Instead we look for unsafe combinations where APIs meet in an unsafe way:
- [SQL injection](../../learn-devsec/vulnerabilities/sqli.md) does not occur because someone used an ' character, it occurs when a user controls query input. We track the control and have full visibility of the query from the database API.
- [Command injection](../../learn-devsec/vulnerabilities/command-injection.md) occurs when any user input reaches a command shell.
- [Path Traversal](../../learn-devsec/vulnerabilities/path-traversal.md) occurs when users can control the file being accessed and is most often exploited when the directories go up.

## It Doesn't Require Fully Perfect Tests
No organization fully tests 100% of everything. It's unreasonable to demand full test coverage before you test security.
- Contrast OSS does not require any usage to locate vulnerable dependencies, it just needs the build system's bill-of-materials.
- Contrast Scan does not require any usage to locate vulnerabilities, it just needs code/bytecode.
- Contrast Assess can generate light results without usage but improves as you use the app. Work in line to your confidence.
- Contrast Protect will defend production applications from exploitation and does not require advance training.

## It Doesn't Impact Production Performance

During QA when an application is tested, agents gather the most information. The audience is a developer who can fix issues to gain the most context.
During production, the audience is the agent's autonomous decision-making. By defending specific APIs against specific threats, the agent saves time by not evaluating security risks that aren't happening.

You should use Contrast Protect in production to defend applications against exploitation.<br/>
You should NOT use Contrast Assess in production, as it is intended for QA environments.<br/>
You can easily use the right setting either through the UI or the agent configuration file.
