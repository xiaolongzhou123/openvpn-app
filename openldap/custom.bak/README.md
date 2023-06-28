docker cp custom  containerid:/
slaptest -f /custom/myObjectClass.conf -F /custom

slapadd -l /custom/cn=config/cn=schema/myObjectClass.ldif -n 0


