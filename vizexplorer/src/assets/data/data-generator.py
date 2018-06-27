names = ["Yanis Lozano","Callan Robbins","Jamal Weston","Libby Brook","Tracey Castaneda","Jocelyn Glass","Alia Hamer","Asiya Martins","Ahmet Pike","Derrick Castaneda","Aarush Paterson","Dennis Mcgowan","Romilly Malone","Shola Rahman","Lucy Fritz","Lyndon Hastings","Destiny Santos","Billie Lennon","Crystal Humphries","Hareem Meza","Eliot Le","Rosemarie Peck","Kobe Weaver","Xavier Hulme","Rhianne Healy","Skyla Raymond","Gabija Bone","Anniyah Greig","Hawa Hirst","Eloisa Fields","Tahmid Shepherd","Israel Gilmore","Cobie Munoz","Bethan Clemons","Henry Searle","Mariam Contreras","Charlene Boyle","Inaya Donald","Gracie-Leigh Browning"]

for idx, name in enumerate(names):
	import random
	# Starts on Index 1 instead of 0
	playerId = idx+1
	firstName = name.split(" ")[0]
	surname = name.split(" ")[1]
	email = firstName.lower() + "_" + surname.lower() + "@email.com"
	sexOptions = ['m', 'f']
	sex = random.choice(sexOptions)
	tierOptions = ['bronze', 'gold', 'silver']
	tier = random.choice(tierOptions)
	print """{"id": %d, "firstName": "%s", "surname": "%s", "sex": "%s", "tier": "%s", "email": "%s@email.com"},""" % (playerId, firstName, surname, sex, tier, email)