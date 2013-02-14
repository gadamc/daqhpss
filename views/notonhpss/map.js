function(doc) {


  if(doc.type == "daqdocument"  && 
    (doc.hpss_status != "hpss in progress" || !doc.hpss_status) && !doc.hpss && doc.run_name >= "mj" &&
    doc.proc0 && doc['proc0']['file_size']){

    emit( doc.run_name, doc['proc0']['file_size']);
  }

  if(doc.type == "daqmetadatadocuments"  &&
    (doc.hpss_status != "hpss in progress" || !doc.hpss_status) && !doc.hpss && doc.run_name >= "mj" &&
    doc.metaproc0 && doc['metaproc0']['file_size'] ){

    emit( doc.run_name, doc['metaproc0']['file_size']);
  }
}