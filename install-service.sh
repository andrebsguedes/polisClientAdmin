SDIR=$HOME/.config/systemd/user/
sed -i /WorkingDirectory=/c\WorkingDirectory=`pwd` polis-client-admin.service
cp polis-client-admin.service $SDIR/
systemctl --user daemon-reload
