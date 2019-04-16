import React from 'react';

class Makeup extends React.Component {
    constructor(props) {
        super(props);

    };


    componentDidMount() {
        var config = {
            autoOpen: true,
            width: 360,
            height: 400
        };

        var
            s, x;

        setTimeout(function () {
            (function (d, k) {
                s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://plugins-media.perfectcorp.com/c6193/sdk.js?apiKey=' + k;
                x = d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }(document, 'pCarQ6AhFds3CdTOGCp3DQ=='));

            window.ymkAsyncInit = function () {
                window.YMK.init(config);
                window.YMK.addEventListener('reset', function () {
                });
                window.YMK.addEventListener('engineClosed', function () {
                });
                window.YMK.addEventListener('videoLoaded', function () {
                    createCategory();
                });

                window.YMK.addEventListener('photoLoaded', function (source, sourceindex) {
                    createCategory();
                });
            };
        }, 3000);
    }
    
    render() {
        return (
            <div className="col m12 l6 col-xl-6 initialVMK" id="YMK-module"></div>
            
            
        )
    }
}



export default Makeup;