const aCar = {
    owner : "Joe Bloggs",
    pervious_owners : {
        name : ['Path Smith', 'Sheila Dwyer'],
        address : ['1 Main Street', '2 High Street']
    },
     

    type : {
        make : 'Toyota', 
        model : 'Corolla', 
        cc: 1.8},
    registration : {
        year: 201,
        county : 'WD', 
        number : 1058},
    mileage : 10000,
    colour : {
        exterior_colour : 'red',
        interior_fabric : {
            texture : 'leather',
            shade : 'cream',
        },
    },
  };
  


  console.log(aCar.owner);
  console.log('First owner : ' + aCar.pervious_owners.name[0] + ' - ' + aCar.pervious_owners.address[0])
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.county + '-' + aCar.registration.number)
  console.log('It is a ' + aCar.colour.exterior_colour + ' car, ' + aCar.mileage + ' mileage, with ' + aCar.colour.interior_fabric.texture + ' interior..')