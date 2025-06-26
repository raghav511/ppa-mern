console.log("Hello Promise")

const successCallbackFn = (data) => {
    console.log("Data downloaded.", data)
}

const failureCallbackFn = (err) => {
    console.log("Data download failed.",err)
}

const recipes_promise = fetch(input="https://dummyjson.collm/recipes")

console.log(recipes_promise);

recipes_promise.then(successCallbackFn).catch(failureCallbackFn)

