function(doc) {
  if( doc.type == "hpsstarfiledocument"  && doc.members && doc.file && Object.prototype.toString.call(doc.members) === '[object Array]'){

      for(var i in doc.members){
        emit( doc['members'][i], doc.file);
      }
    } 
}