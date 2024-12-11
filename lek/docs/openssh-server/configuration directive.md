---
sidebar_position: 4
---

# 4. Configuration Directive

Let’s take a look at an example of a configuration directive change. To make your OpenSSH server display the contents of the /etc/issue.net file as a pre-login banner, you can add or modify this line in the /etc/ssh/sshd_config file:

`PermitRootLogin no`

`PasswordAuthentication no`

`sudo sshd -t -f /etc/ssh/sshd_config`

After making changes to the /etc/ssh/sshd_config file, save the file. Then, restart the sshd server application to effect the changes using the following command:

`sudo systemctl try-reload-or-restart ssh`