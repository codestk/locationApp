

//Page Properties
function SetTitle(msg) {
    var _title;
    if (msg.d[0].Head_Tilte == null) {
        _title = title;
    }
    else {
        _title = msg.d[0].Head_Tilte;
    }
    $('title').text(_title + " : MazzPicture");


}
function SetMeta(msg) {
    var _Description;
    var _KeyWords;



    if (msg.d[0].meta_Description == null) {
        _Description = Description;
    }
    else {
        _Description = msg.d[0].meta_Description
    }

    if (msg.d[0].meta_KeyWords == null) {
        _KeyWords = KeyWords;
    }
    else {
        _KeyWords = msg.d[0].meta_KeyWords;
    }
    $('meta[name=Description]').attr('content', _Description);
    $('meta[name=KeyWords]').attr('content', _KeyWords);

}





