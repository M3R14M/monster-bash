<HTML lang="en">

<HEAD>
    <META charset="UTF-8">
    <META name="viewport" content="width=device-width, initial-scale=1.0">
    <TITLE>Monster Bash: Guestbook</TITLE>
    <LINK rel="stylesheet" href="./styles/style.css">
</HEAD>

<BODY>
    <A href="./index.html"><IMG src="./assets/images/back.gif"></A>
    <BR><BR><BR>
    <CENTER>
        <H1>Guestbook</H1>

        <P>WELCOME TO THE <FONT color="#F00" size="+2">MONSTER BASH GUESTBOOK!</FONT> YOU ARE VISITOR NUMBER
            <?PHP echo rand(1000, 9999); ?>! <BR>PLEASE LEAVE A MESSAGE AND TELL US WHAT YOU
            THINK ABOUT THIS AWESOME GAME! <BR>IF YOU HAVE A COOL WEBSITE, DON'T FORGET TO
            SHARE IT! <BR>
            <FONT color="#0F0" size="+2">~HAPPY HAUNTING!~</FONT> <BR><BR>
        </P>

        <FORM action="guestbook.php" method="post">
            <LABEL for="name">Name:</LABEL>
            <INPUT type="text" id="name" name="name" required><BR><BR>
            <LABEL for="website">Website:</LABEL>
            <INPUT type="url" id="website" name="website"><BR><BR>
            <LABEL for="message">Message:</LABEL><BR>
            <TEXTAREA id="message" name="message" rows="4" cols="50" required></TEXTAREA><BR><BR>
            <INPUT type="submit" value="Submit">
        </FORM>

        <HR>

        <H2>Messages</H2>
        <?PHP
        $GB = 'guestbook.txt';
        $LOG = 'guestbook.log';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = htmlspecialchars($_POST['name']);
            $website = filter_var($_POST['website'], FILTER_SANITIZE_URL);
            $message = htmlspecialchars($_POST['message']);
            $date = date('Y-m-d H:i:s');

            $entry = "<TABLE cellspacing='0'>
                        <TR>
                          <TH>From:</TH>
                          <TD>$name";

            if (!empty($website) && filter_var($website, FILTER_VALIDATE_URL)) {
                $entry .= " <A href='$website' target='_blank' data-title='Visit $name&apos;s website!'>
                            <IMG src='./assets/images/www.webp'></A>";
            }

            $entry .= "</TD>
                      </TR>
                      <TR>
                        <TH>Date:</TH>
                        <TD>$date</TD>
                      </TR>
                      <TR>
                        <TH>Message:</TH>
                        <TD>$message</TD>
                      </TR>
                    </TABLE>";

            file_put_contents($GB, $entry, FILE_APPEND);

            // Abuse check
            $ipAddress = $_SERVER['REMOTE_ADDR'];
            $logEntry = "Date: $date\nName: $name\nWebsite: $website\nMessage: $message\nIP Address: $ipAddress\n\n";
            file_put_contents($LOG, $logEntry, FILE_APPEND);
        }

        if (file_exists($GB)) {
            $entries = file_get_contents($GB);
            echo $entries;
        }
        ?>
    </CENTER>
</BODY>

</HTML>