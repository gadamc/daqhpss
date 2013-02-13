function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments")  && 
        doc.hpss && doc['hpss']['file']){

      emit( doc.run_name,  doc['hpss']['file']);
    }
}