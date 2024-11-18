sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("app.expand.controller.View1", {
        onInit: function () {

        },
       

        onComboBoxSelectionChange:function(oEvt){
          var oItem=oEvt.getParameter("selectedItem").mProperties.key
          var oModel=this.getOwnerComponent().getModel()

          var entity="BusinessPartnerSet('" + oItem + "')/ToSalesOrders"

          oModel.read(entity,{
            success: function (oData) {
                // Log the data or process it as needed
                console.log("Fetched Data:", oData);
    
                // Optionally set the data to a model for binding
                var oJSONModel = new sap.ui.model.json.JSONModel(oData.results);
                that.getView().setModel(oJSONModel, "salesOrders");
            },
            error: function (oError) {
                // Log the error and provide user feedback
                console.error("Error fetching data:", oError);
                sap.m.MessageToast.show("Failed to fetch Sales Orders. Please try again.");
            }
       })

        }
       

    });
});
