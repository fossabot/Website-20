// sub to lanyard ws
lanyard({
    userId: "516750892372852754",
    socket: true,
    onPresenceUpdate: user, // presenceData
});
// work with ws
function user(base) {
    if (typeof base.activities.find((act) => act.type == 1).url == "undefined") {
        statusborder();
    } else {
        statusborder();
    }
    function liveborder() {
        document.getElementById("profilePicture").href = base.activities.find((act) => act.type == 1).url;
        document.getElementById("pfp").style = "border: 5px solid #593695";
    }
    function statusborder() {
        const status = base.data.discord_status;
        if (status == "online") {
            document.getElementById("pfp").style = "border: 5px solid #3BA55D";
        } else if (status == "idle") {
            document.getElementById("pfp").style = "border: 5px solid #FAA81A";
        } else if ((status = "dnd")) {
            document.getElementById("pfp").style = "border: 5px solid #ED4245";
        } else {
            document.getElementById("pfp").style = "border: 5px solid #747F8D";
        }
    }
}
// Visits
var r = new XMLHttpRequest();
r.addEventListener("load", function () {
    document.querySelector("#stats").innerText = "Unique Visits: " + JSON.parse(this.responseText).count_unique + "\nTotal Visits: " + JSON.parse(this.responseText).count;
});
r.open("GET", "https://frcat.goatcounter.com/counter/" + encodeURIComponent(location.pathname) + ".json");
r.send();
