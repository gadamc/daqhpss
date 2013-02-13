function(doc) {
  if( doc.type == "hpsstarfiledocument"  && doc.members){
      emit( doc._id, doc.members);
    }
}