
< !DOCTYPEhtml >
    <html>
        <head>
            <title> VOTE </title>
        </head>
        <body>
            <h1> VOTE FOR ME! </h1>
            <ul id="votes">
            </ul>

            <button onclick="yes()">Yes</button>
            <p id="yes"></p>

            <button onclick="no()">No</button>
            <p id="no"></p>

            <button onclick="maybe()">MAYBE</button>
            <p id="maybe"></p>


            <script type="text/javascript">
                var countYes = 0
                var countNo = 0
                var countMaybe = 0

        function yes() {
                    countYes++;
        document.getElementById("yes").innerHTML = countYes;
            }

        function no() {
                    countNo++;
        document.getElementById("no").innerHTML = countNo;
            }

        function maybe() {
                    countMaybe++;
        document.getElementById("maybe").innerHTML = countMaybe;
            }

</script>

        </body>

    </html>

