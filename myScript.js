var currentPage = window.location.href;

var link = document.createElement("a");
link.id = "download-this-shit";
link.style.cssText = "font: bold 11px Arial;text-decoration: none;background-color: #EEEEEE;color: #333333;padding: 2px 6px 2px 6px;border-top: 1px solid #CCCCCC;border-right: 1px solid #333333;border-bottom: 1px solid #333333;border-left: 1px solid #CCCCCC;"
link.text = "Download as audio";
link.setAttribute('target', '_blank');
var video_id = window.location.search.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
}
link.href = "http://localhost:8000/download/"+video_id;
document.getElementById("info").appendChild(link);

// listen for changes
setInterval(function()
{
    if (currentPage != window.location.href)
    {
        currentPage = window.location.href;
        video_id = window.location.search.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        document.getElementById("download-this-shit").href = "http://localhost:8000/download/"+video_id;

    }
}, 500);