#### commands
###### ad-hoc
check all inventory hosts are ready to be managed
`$ ansible all -m ping`
run uptime command on all hosts in web group
`$ ansible web -m command -a "uptime"`
collect & display the discovered for the localhost
`$ ansible localhost -m setup`

`$ ansible all -i <host file> -u vagrant -m ping`
`$ ansible all -i <host file> -u vagrant -m setup`
to add
`$ ansible webservers -i <host file> -u vagrant -m yum -a "name=httpd state=present" -b`
to remove
`$ ansible webservers -i <host file> -u vagrant -m yum -a "name=httpd state=absent" -b`
run playbook
`$ ansible-playbook -i <host file> <playbook file>`

#### tasks
###### variables
file: directory should exist
yum: package should be installed
service: service should be running
template: render a config file from a template
get_url: fetch an archive file from a URL
git: clone a source code repo