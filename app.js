function scanPorts() {
    //scanPortという名前の関数->HTML onclick="scanPorts()"とconnect-> Scanボタンを押した時に動く

    const ip = document.getElementById('ipInput').value;
    //HTMLの入力欄(id="ipInput")に書かれた文字を取得->ipという箱に入れる
    const results = document.getElementById('results');
    //結果表示欄(id="results")を取得->resultsという箱に入れる

    results.innerHTML = '<p>Scanning ' + ip + '...</P>';
    //resultsの場所に[Scanning 192.168.1.1]のようなIPアドレスを表示->ユーザーが入力したIPアドレスがここに入る

    const ports = [21, 22, 23, 25, 80, 443, 3306, 8080];
    //スキャンするポート番号のリスト

    const portNames = {
        21: 'FTP',
        22: 'SSH',
        23: 'Telnet',
        25: 'SMTP',
        80: 'HTTP',
        443: 'HTTPS',
        3306: 'MySQL',
        8080: 'HTTP Alt'
    };

    setTimeout(function() {
        let html = '<h2>Results for ' + ip + '</h2>';
        //結果を表示する為のHTML文字列を作る

        ports.forEach(function(port) {
            const isOpen = Math.random() > 0.5;
            const status = isOpen ? 'OPEN' : 'CLOSED';
            const color = isOpen ? 'green' : 'red';
            html += `<p style= "color:${color}">${port} (${portNames[port]}) - ${status}</p>`;
            //NEW
            
            //OLD -> html += '<p style="color:' + color + '">' + port + ' (' + portNames[port] + ') - ' + status + '</p>';
           
        });
        //ポートリストを一個ずつ処理->Math.random() 0-1のランダムな数字をだす->0.5よりも大きければtrue(OPEN)、小さければ(CLOSED)->だから毎回違う
        

        results.innerHTML = html;
    }, 1500);
        //1.5秒待ってから処理を実行する

}