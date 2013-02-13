function(doc) {
  if( (doc.type == "daqdocument" || doc.type == "daqmetadatadocuments")  && 
        doc.['status'] == 'hpss in progress' && doc.run_name ){

      emit( doc.run_name,  1);
    }
}