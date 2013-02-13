function(doc) {
  if( doc.type == "hpsstarfiledocument"  && doc.file_size){
      emit( doc._id, doc.file_size);
    }
}