module.exports =  function(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        return JSON.parse(xhr.responseText.replace(/^(.*?)\(/g, '').replace(/\)$/g, '')).photos.photo;
    }
    else {
        console.log(xhr.statusText);
    }
};
