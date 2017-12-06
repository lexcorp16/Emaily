var localtunnel = require('localtunnel');

localtunnel(5001, { subdomain: 'jgdiwubwbbew' }, function(err, tunnel) {
  console.log('LT running')
});
