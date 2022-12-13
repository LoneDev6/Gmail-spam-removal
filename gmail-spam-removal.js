// Updated on 2022-12-13
var nice = [
    //#region Filter

    "storage.googleapis.com/", // Scams usually use google apis to make their shitty clickable links.

    ".firebaseapp.com", // Seems people are trying to scam by making you access firebase projects

    "clevernessoven.com",
    "dissingconnivance.com",
    "vuroc.com",
    "siatave.com",
    "1dznhmvbvg-------------------------.com ",
    "lxuagolwx.us",
    "unionsecret.com",
    "redeemsexcavate.com",
    "wuszofvbw.us",
    "augustdot.com",
    "xhmdefmwyvniad.org",
    "scorchedca.eu.org",
    "ipptr.com",
    "ip-pool.com",
    "cryptcapitalgroup.com",
    "attentivenessfeather.com",
    "titansvision.com",
    "digitalincome24x7.com",
    "stockscapitalgroup.com",
    "war7xg31l--.com",
    "infancyboy.com",
    "dreamsatisfaction.com",
    "serverclienti.com",
    "coppel.com",
    "larkbutterfly.com",
    "divestaxiom.com",
    "thebtcinvestment.com",
    "ljciyzhupg-----------pgbuek-.com",
    "exchangevisitcompany.com",
    "pgbuek-.com",
    "bruntheavy.com",
    "mail-getresponse.com",
    "sharepointonline.com",
    "faycushion.com",
    "ikexpress.com",
    "jcom.zaq.ne.jp",
    "key-data.co.uk",
    "vwyorfr.us",
    "qgdahhw.us",
    "pnkqrev.us",
    "wlnnnxx.us",
    "friendlycabochon.com",
    "naiado.com",
    "emails-jobsdelivered.com",
    "bvdxuzt.us",
    "perrychristinejacobs.work",
    "gpxxpdx.us",
    "boxingsuit.org.uk",
    "independantnewspaper.de",
    "arqxkhu.us",
    "flutterfleapit.com",
    "wg6ur8-.com",
    "5nakhak5x.us",
    "riskchemicalproduct.org.uk",
    "bestclassicmusic.org.uk",
    "planningbrands.com",
    "alpha-lt.net",
    "amorphousanimus.com",
    "tradingcourseguides.com",
    "blackmagicdesign.com",
    "sndcrew3.com",
    "myfastcredit.info",
    "futuretarget.info",
    "asquarea09@gmail.com",
    "jd3802266@gmail.com",
    "offerscorner.net",
    "successtimer.net",
    "nwabuezesamsonnwafor@gmail.com",
    "e4ducat.online",
    "lowiijohn85@gmail.com",
    "dhlofficeud@yahoo.com",
    "strongideas.info",
    "@...",
    "sakura.ne.jp",
    "faureyvonne8@gmail.com",
    "sasktel.net",
    "regrthtrhje.ml",
    "designclub.uk.com",
    "header.from=gmail.com", // Some spammers use gmail to send their spam emails.
    "altroconsumo.it", // Scammy italian shitty company

    "Franklin Ave Ste",
    "123 SE 3rd Ave. Suite 574, Miami",
    "5960 South Land Park",
    "Tvrdého 643 19900 Praha 9",
    "928 S Dixie Hwy",
    "34 N Franklin Ave Ste",
    "Long Prairie Rd",
    "Alicia Pkwy",
    "Laguna Niguel",
    "Tvrdeho 360",
    "31 Rochester Drive",

    "CITIBANK",
    "Your Bank name",
    "𝐩𝐫𝐨𝐬𝐭𝐚𝐭𝐞", // 🗿


    "LinkedIn Corporation",
    "WhatsApp Service"
    //#endregion
];


//#region Logic
function filterViaSpam() {
    var threads = GmailApp.getSpamThreads(0, 30);
    for (var i = 0; i < threads.length; i++) {
        var messages = threads[i].getMessages();
        for (var j = 0; j < messages.length; j++) {
            var message = messages[j];
            var body = message.getRawContent();
            if (check(body, nice)) {
                GmailApp.moveThreadToTrash(threads[i]);
                console.log("Found: " + message.getSubject());
            }
            Utilities.sleep(1000);
        }
    }
}
function check(body, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (body.indexOf(arr[i]) > - 1)
            return true;
    }
    return false;
}
//#endregion
