package model;

import java.io.Serializable;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class Result implements Serializable {
    private Map<String, Datos> documentToDocumentData = new HashMap<>();

    public void addDocumentData(String document, Datos documentData) {
        documentToDocumentData.put(document, documentData);
    }

    public Map<String, Datos> getDocumentToDocumentData() {
        return Collections.unmodifiableMap(documentToDocumentData);
    }
}
