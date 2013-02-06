function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments") && doc.status == "good" && 
        doc.irods && doc['irods']['file'] ){

      emit( doc.run_name,  doc['irods']['file']);
    }
}