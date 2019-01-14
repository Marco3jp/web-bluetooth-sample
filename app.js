class WebBluetoothSample {
    constructor() {
        let sendButton = document.querySelector("#send");
        let connectButton = document.querySelector("#connect");
        this.displayElement = document.querySelector("#display");
        this.logElement = document.querySelector("#log");


        sendButton.addEventListener("click", () => {
            this.sendPing();
        });
        connectButton.addEventListener("click", () => {
            this.connectDevice();
        });
    }

    sendPing() {

    }

    connectDevice() {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        }).then(device => device.gatt.connect())
            .then(service => {
                console.log(service);
                this.log("connected!!!");
            }).catch(e => {
            console.error(e);
        })
    }

    print(text) {
        let div = document.createElement("div");
        let span = document.createElement("span");
        span.innerText = text;
        div.appendChild(span);
        this.displayElement.appendChild(div);
    }

    log(text) {
        let div = document.createElement("div");
        let span = document.createElement("span");
        span.innerText = text;
        div.appendChild(span);
        this.logElement.appendChild(div);
    }
}

let webBluetoothSample = new WebBluetoothSample();