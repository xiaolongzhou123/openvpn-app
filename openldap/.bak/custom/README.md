docker cp custom  containerid:/

slaptest -f /custom/myObjectClass.conf -F /custom/
mv /custom/cn\=config/cn\=schema/cn\=\{3\}myobjectclass.ldif /custom/cn\=config/cn\=schema/myObjectClass.ldif

apt update
apt install vim -y

修改myObjectClass.ldif

dn: cn=myObjectClass,cn=schema,cn=config
objectClass: olcSchemaConfig
cn: myObjectClass

slapadd -l /custom/cn=config/cn=schema/myObjectClass.ldif -n 0
