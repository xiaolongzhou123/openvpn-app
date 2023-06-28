#/bin/bash
echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/ipv4.forward.conf
sysctl -p
update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy

iptables -t nat -A POSTROUTING -s 123.123.123.0/24 -o eth0 -j MASQUERADE
/usr/local/openvpn/sbin/openvpn --config /etc/openvpn/server.conf
