console.log(1)
Prom();

function Prom()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {Out(); resolve(); }, 1000)
        });
}

function Out()
{
    console.log(2)
}