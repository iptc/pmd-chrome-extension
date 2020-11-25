// Copyright 2020 IPTC - International Press Telecommunications Council

function setUpContextMenu() {
  var context = "image";
  var title = "View IPTC image metadata";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "id": "context" + context});    
}

function onClickHandler(info, tab) {
    console.log("Clicked on image:"+info.srcUrl);
    window.open("https://getpmd.iptc.org/getpmd/?imgurl="+info.srcUrl);
}

chrome.runtime.onInstalled.addListener(setUpContextMenu);

chrome.contextMenus.onClicked.addListener(onClickHandler);
