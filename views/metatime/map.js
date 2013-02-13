function(doc) {
 
  //the meta documents should always be uploaded last because
  //Jules doesn't move them over to the s7 machine for processing
  //until the samba run is completely finished
  //so they are used here to tell us the time, basically, 
  //when a samba run was completed and when all of its data
  //was moved to the CC in Lyon.
  //
  //Note that only runs newer than "mj" are emitted here
  //That is, data newer than Sep 1 2012. This is my unofficial
  //start of Edw3 - Run20. 
  //

  if(doc.type == "daqmetadatadocuments" && doc['file_lastmodified']
    && doc.metaproc0 && doc.run_name >= "mj"){

    emit( doc['file_lastmodified'], doc.run_name);
  }
}