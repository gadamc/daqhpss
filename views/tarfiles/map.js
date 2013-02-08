function(doc) {
  if( doc.type == "hpsstarfiledocument" && doc['date_unixtime'] && doc['file_size']){
      emit( doc['date_unixtime'], doc['file_size']);
    }
}