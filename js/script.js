let current_time;

        setInterval(() => {

        dt = new Date();
        let date = dt.toLocaleDateString();
        current_time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();

        document.getElementById('time').innerText = current_time;

        document.getElementById('date').innerText = date;

        }, 1000);