# Basic OpenFin Platform bootstrap

This is a basic example that lets you have a place to determine what windows should be launched and to add additional logic that can run during the lifetime of
the application (the provider runs hidden and only closes when all windows have been closed so think of it as a service).

You can browse the code for this repo on codesandbox: https://codesandbox.io/s/openfin-platform-bootstrap-example-vsu7x or github.

If you have OpenFin and just want to launch the demo you can visit: https://vsu7x.csb.app/

Some things you will need to update if you fork codesanbox:

In config/app.platform.fin.json update:

- uuid : make the uuid unique
- visit https://www.openfin.co and request a trial/developer license
- update the url field to reflect your codesandbox url
- update the application icon to reflect your own icon
- update the name and description to reflect your application
- update the security realm in the runtime args

More information about OpenFin:

- https://openfin.co/ -> main site
- https://developers.openfin.co/docs/getting-started => getting started guide
- https://github.com/openfin -> OpenFin Github repo
