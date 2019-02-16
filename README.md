# Hackxplore

### Starting the Fabric Network:
composer network install --card PeerAdmin@hlfv1 --archiveFile opiodnetwork@0.0.1.bna

composer network start --networkName opiodnetwork --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card