pm.test('Gender is male', () => pm.expect(pm.response.json().gender).to.eql('m'));

pm.test('Name is John', () => pm.expect(pm.response.json().name).to.eql('John'));

pm.test('Name is John', () => pm.expect(pm.response.json().name).to.include('J'));

pm.test('Age is 25', () => pm.expect(pm.response.json().age).to.not.eql(24));

pm.test('Admin is true', () => pm.expect(pm.response.json().admin).to.be.true);

pm.test('Gender is correct', () => pm.expect(pm.response.json().gender).to.oneOf(['m', 'f']));

pm.test('Admin is available', () => pm.expect(pm.response.json()).to.have.property('admin'));

pm.test('Status code is 200', () => pm.expect(pm.response.code).to.eql(200));

pm.test('Status code is 200', () => pm.response.to.have.status(200));