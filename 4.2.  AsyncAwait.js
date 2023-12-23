tmp();

async function tmp() {

  let promise = Prom();

  let result =  await promise;     
    
  console.log(result); 
  console.log("Привет!");
}

function Prom()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {Out(); resolve("Здравствуй!"); }, 1000)
        });
}

function Out()
{
    console.log("Здравствуй!")
}

/*
  Здесь всё довольно просто:
  Чтобы продемонстрировать работу async/await, нужно убирать или ставить await (он уже стоит).
  Если его нет, то получится:  Promise { <pending> } Привет! Здравствуй!
  А если он есть, то получится: Здравствуй! Здравствуй! Привет!

  В первом случае нужно ждать 1с, чтобы появилось последнее сообщение, а во втором все 3 сообщения.
*/