import sys
new=str(sys.argv[2])
Name=new.replace("_", "%")
TestDateiSchreiben=open("xmlKopie.xml","w")
TestDateiLesen=open("Applicant_List.xml","r")
i=0
for line in TestDateiLesen:
    TestDateiSchreiben.write(line)
TestDateiSchreiben.close()
TestDateiLesen.close()

TestDateiSchreiben=open("Applicant_List.xml","w")
TestDateiLesen=open("xmlKopie.xml","r")
for line in TestDateiLesen:
    TestDateiSchreiben.write(line)
    i+=1
    if i>int(sys.argv[3])-1:
        break
TestDateiSchreiben.write("<APPLICANT>\n<ID>"+Name+"</ID>\n<NAME>"+str(sys.argv[1])+"</NAME>\n</APPLICANT>\n")
for line in TestDateiLesen:
    TestDateiSchreiben.write(line)


TestDateiSchreiben.close()
TestDateiLesen.close()
