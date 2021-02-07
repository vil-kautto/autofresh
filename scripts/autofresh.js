function refresh() {
    console.log("Starting extension");
    let time = 3000;
    setTimeout(() => {
        window.location.reload();
    }, time);
}

refresh();