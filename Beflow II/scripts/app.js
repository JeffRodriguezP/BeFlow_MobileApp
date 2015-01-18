(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
        models: {
            home: {
                title: 'Beflow'
            },
            topology: {
                 title: 'Topology',
            },
            flows: {
                title: 'Flows',
                data_flows: new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: "http://147.83.113.109:8080/jersey-quickstart-webapp/beflow/myresource/getFlows",
                            dataType: "json"
                        }
                    },
                    schema: {
                        // the data, which the data source will be bound to is in the "list" field of the response
                        data: "flowConfig"
                    }
                })
            },
            nodes: {
                title: 'Nodes',
                 data_nodes: new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: "http://147.83.113.109:8080/jersey-quickstart-webapp/beflow/myresource/getNodesController",
                            dataType: "json"
                        }
                    },
                    schema: {
                        // the data, which the data source will be bound to is in the "list" field of the response
                        data: "nodes"
                    }
                })
                
            },
            about: {
                title: 'About BeFLow'
            },
            clients: {
                title: 'Clients',
                ds: new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: "http://147.83.113.109:8080/jersey-quickstart-webapp/beflow/myresource/getAllCompanies",
                            dataType: "json"
                        }
                    }
                }),
                alert: function (e) {
                    alert(e.data.company_name);
                }
            }
        }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {

        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {

            // you can change the default transition (slide, zoom or fade)
            transition: 'slide',

            // comment out the following line to get a UI which matches the look
            // and feel of the operating system
            skin: 'flat',

            // the application needs to know which view to load first
            initial: 'views/home.html'
        });

    }, false);


}());