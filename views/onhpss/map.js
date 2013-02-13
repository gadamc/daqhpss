function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments")  && 
        doc.hpss && doc['hpss']['file'] && doc['hpss']['date'] ){

      emit( doc.run_name,  [doc['hpss']['file'], doc['hpss']['date']]);
    }
}