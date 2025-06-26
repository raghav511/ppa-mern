const Button = () => {
    return <button>Hello</button>;
};

const Main = () => {
    return (
        <main>
            <section>
                <h1>Title 1</h1>
                <p>This is the dummy text</p>
            </section>
            <section>
                <h1>Title 2</h1>
                <p>This is the dummy text</p>
            </section>
            <Button />
        </main>
    );
};

export { Main, Button }; // named export
