function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments") && doc.status == "good" && 
        doc.hpss && doc['hpss']['file'] && doc['hpss']['date'] ){

      emit( doc.run_name,  [doc['hpss']['file'], doc['hpss']['date']]);
    }
}