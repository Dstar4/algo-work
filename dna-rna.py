def DNAtoRNA(dna):
    arr = [dna[i] for i in range(len(dna))]
    return dna.replace("T", "U")


print(DNAtoRNA("TTTT"))
