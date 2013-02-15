function(doc) {
  if(doc.type == "daqdocument"  && doc.hpss &&
    doc['hpss']['file'] && doc.proc0 && doc['proc0']['file_size'] 
    && doc.run_name >= "mj"){

    emit( doc.run_name, doc['proc0']['file_size']);
  }

  if(doc.type == "daqmetadatadocuments"  && doc.hpss &&
    doc['hpss']['file'] && doc.metaproc0 && doc['metaproc0']['file_size'] 
    && doc.run_name >= "mj"){

    emit( doc.run_name, doc['metaproc0']['file_size']);
  }
}