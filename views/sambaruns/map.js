function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments") && doc.status == "good" && 
        doc.irods && doc['irods']['file'] && doc['irods']['date'] ){

      emit( doc.run_name,  [doc['irods']['file'], doc['irods']['date']]);
    }
}