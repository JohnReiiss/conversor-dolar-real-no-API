let dolar = 6.30;

let usdInput = document.querySelector("#usd");
let blrInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
});

blrInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

blrInput.addEventListener("blur", () => {
    blrInput.value = formatCurrency(blrInput.value)
})

usdInput.value = "6,30";
convert("usd-to-brl");

// Funções
function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        blrInput.value = formatCurrency(result)
    }
    if (type == "brl-to-usd") {
        let fixedValue = fixValue(blrInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }
}
