module.exports = function (opts, help, usage) {
  if (opts.version) {
    var pkg = require('../package.json')
    console.error(pkg.version)
    process.exit(1)
  }
  console.error('Usage: dat <cmd> [options]')
  console.error('')
  console.error('Sharing Files:')
  console.error('   dat create [<dir>]          create a local archive')
  console.error('   dat sync                    watch for changes & sync files')
  console.error('   dat share                   create & sync archive in one command!')
  console.error('')
  console.error('Downloading Files:')
  console.error('   dat clone <link> [<dir>]    clone a remote archive')
  console.error('   dat pull                    update from remote archive & exit')
  console.error('   dat sync                    sync files with the network')
  console.error('')
  console.error('Information:')
  console.error('   dat status                  get key & info about a local dat')
  console.error('   dat log                     log history for a dat')
  console.error('')
  console.error('Troubleshooting & Help:')
  console.error('   dat doctor                  run the dat network doctor')
  console.error('   dat help                    print this usage guide')
  console.error('   dat <command> --help, -h    print help for a command')
  console.error('   dat --version, -v           print the dat version')
  console.error('')
  if (usage) {
    console.error('General Options:')
    console.error(usage)
  }
  console.error('Have fun using Dat! Learn more at docs.datproject.org')
  process.exit(1)
}