let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let outputDiv = document.getElementById('output');

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        const message = `${stocks.Fruits[Fruit_name]} was selected`;
        console.log(message);
        outputDiv.innerHTML += message + '<br>';
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        const message = "Production has started";
        console.log(message);
        outputDiv.innerHTML += message + '<br>';

        setTimeout(() => {
            const message = "Fruit has been chopped";
            console.log(message);
            outputDiv.innerHTML += message + '<br>';

            setTimeout(() => {
                const message = `${stocks.liquid[0]} and ${stocks.liquid[1]} were added`;
                console.log(message);
                outputDiv.innerHTML += message + '<br>';

                setTimeout(() => {
                    const message = "The machine has started";
                    console.log(message);
                    outputDiv.innerHTML += message + '<br>';

                    setTimeout(() => {
                        const message = `${stocks.holder[0]} was selected as holder`;
                        console.log(message);
                        outputDiv.innerHTML += message + '<br>';

                        setTimeout(() => {
                            const message = `${stocks.toppings[0]} was added as toppings`;
                            console.log(message);
                            outputDiv.innerHTML += message + '<br>';

                            setTimeout(() => {
                                const message = "Serve the Ice cream";
                                console.log(message);
                                outputDiv.innerHTML += message + '<br>';
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};

document.getElementById('orderButton').addEventListener('click', function() {
    outputDiv.innerHTML = ''; // Clear previous output
    order(0, production);
});